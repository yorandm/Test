const uuid = require('uuid');

const {
    tables,
    getKnex
} = require('../data');
const {
    getChildLogger
} = require('../core/logging');

const SELECT_COLUMNS = [
    `${tables.user}.id`, `${tables.user}.name`, `${tables.user}.username`, `${tables.user}.password_hash`, `${tables.roles}.role as roles`
]

const formatShit = ({
    id,
    name,
    roles,
    username
}) => ({
    id,
    name,
    roles: [roles],
    username,
});

/**
 * Get all `limit` users, skip the first `offset`.
 *
 * @param {object} pagination - Pagination options
 * @param {number} pagination.limit - Nr of transactions to return.
 * @param {number} pagination.offset - Nr of transactions to skip.
 */
const findAll = ({
    limit,
    offset,
}) => {
    return getKnex()(tables.user)
        .select()
        .limit(limit)
        .offset(offset)
        .orderBy('name', 'ASC');
};

/**
 * Calculate the total number of user.
 */
const findCount = async() => {
    const [count] = await getKnex()(tables.user)
        .count();
    return count['count(*)'];
};

/**
 * Find a user with the given id.
 *
 * @param {string} id - The id to search for.
 */
const findById = (id) => {
    return getKnex()(tables.user)
        .select(SELECT_COLUMNS)
        .join(tables.roles, `${tables.roles}.id`, `${tables.user}.role`)
        .where(`${tables.user}.id`, id)
        .first();
};

/**
 * Find a user with the given email.
 *
 * @param {string} email - The email to search for.
 */
const findByUsername = (username) => {
    return getKnex()(tables.user)
        .select(SELECT_COLUMNS)
        .join(tables.roles, `${tables.roles}.id`, `${tables.user}.role`)
        .where('username', username)
        .first();
};

/**
 * Create a new user with the given `name`.
 *
 * @param {object} user - User to create.
 * @param {string} user.name - Name of the user.
 * @param {string} user.email - Email of the user.
 * @param {string} user.passwordHash - Hashed password of the user.
 * @param {string[]} user.roles - Roles of the user.
 */
const create = async({
    name,
    username,
    passwordHash,
    roles,
}) => {
    try {
        const id = uuid.v4();
        await getKnex()(tables.user)
            .insert({
                id,
                name,
                username,
                password_hash: passwordHash,
                roles: JSON.stringify(roles),
            });
        return await findById(id);
    } catch (error) {
        const logger = getChildLogger('users-repo');
        logger.error('Error in create', {
            error,
        });
        throw error;
    }
};

/**
 * Update a user with the given `id`.
 *
 * @param {string} id - Id of the user to update.
 * @param {object} user - User to save.
 * @param {string} user.name - Name of the user.
 */
const updateById = async(id, {
    name,
}) => {
    try {
        await getKnex()(tables.user)
            .update({
                name,
            })
            .where('id', id);
        return await findById(id);
    } catch (error) {
        const logger = getChildLogger('users-repo');
        logger.error('Error in updateById', {
            error,
        });
        throw error;
    }
};

/**
 * Update a user with the given `id`.
 *
 * @param {string} id - Id of the user to delete.
 */
const deleteById = async(id) => {
    try {
        const rowsAffected = await getKnex()(tables.user)
            .delete()
            .where('id', id);
        return rowsAffected > 0;
    } catch (error) {
        const logger = getChildLogger('users-repo');
        logger.error('Error in deleteById', {
            error,
        });
        throw error;
    }
};

module.exports = {
    findAll,
    findCount,
    findById,
    create,
    findByUsername,
    updateById,
    deleteById,
};