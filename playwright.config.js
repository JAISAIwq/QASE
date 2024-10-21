
// playwright.config.js
const config = {
                                    use: {
                                    screenshot: 'only-on-failure',
                                    video: 'retain-on-failure',
                                    },
                                    reporter: [
                                    ['list'],
                                    [
                                    'playwright-qase-reporter',
                                    {
                                    mode: 'testops',
                                    debug: false,
                                    testops: {
                                    api: {
                                    token: '29e130412a021c4db23888d1a75fef71564f4332a025994b4e567536c9037f0b',
                                    },
                                    project: 'DEMO', // Replace <DEMO> with your project code
                                    uploadAttachments: true,
                                    run: {
                                    complete: true,
                                    },
                                    },
                                    },
                                    ],
                                    ],
                                    };
                                    
                                    module.exports = config;