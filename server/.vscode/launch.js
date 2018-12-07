{
    "version": "0.2.0",
        "configurations": [
            {
                "name": "nodemon",
                "type": "node",
                "request": "launch",
                "runtimeExecutable": "nodemon",
                "runtimeArgs": [
                    "--inspect-brk"
                ],
                "program": "${workspaceRoot}/app.js",
                "protocol": "inspector",
                "restart": true,
                "env": {
                    "NODE_ENV": "test"
                },
                "console": "integratedTerminal",
                "internalConsoleOptions": "openOnSessionStart"
            },
            {
                "name": "Run Tests With Mocha",
                "type": "node",
                "request": "launch",
                "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
                "stopOnEntry": false,
                "args": [
                    "test/**/*.js",
                    "--no-timeouts"
                ],
                "cwd": "${workspaceRoot}",
                "runtimeExecutable": null,
                "env": {
                    "NODE_ENV": "test"
                }
            }
        ]
}