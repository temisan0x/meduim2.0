export default {
    name: 'comment',
    title: 'comment',
    type: 'comment',
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: "Comments won't show on the site without approval",
        },
        {
            name: 'email',
            type: 'string',
        },
        {
            name: 'comment',
            type: 'text',
        },
        {
            name: "post",
            type: "reference",
            to: [{ type: "post" }],
        },
    ],
};
    