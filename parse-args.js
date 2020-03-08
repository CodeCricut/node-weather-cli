const ArgumentParser = require("argparse").ArgumentParser;

const parser = new ArgumentParser({
    version: "1.0.10",
    addHelp: true,
    description:
        "Weather CLI is a tool that can update you on the latest weather from thousands of locations.",
    prog: "Weather CLI"
});

parser.addArgument(["-l", "--location"], {
    help:
        "Provide the location where you would like to get a weather update on. [--location <city> <state>]",
    defaultValue: ["Lincoln", "Nebraska"],
    type: "string",
    nargs: 2 // stores as an array,
});

exports.args = parser.parseArgs();
