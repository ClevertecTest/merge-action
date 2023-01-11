const core = require('@actions/core');
const { request } = require('@octokit/request');

const main = async () => {
    try {
        const owner = core.getInput('owner', { required: true });
        const url = 'https://training.cleverland.by/pull-request/merged';

        await request(`POST ${url}`, {
            data: { github: owner },
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });

    } catch (error) {
        core.setFailed(error.message);
    }
}

// Call the main function to run the action
main();