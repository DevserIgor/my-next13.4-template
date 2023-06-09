module.exports = {
  "src/**/*": (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(" --file ")} --max-warnings=0`,
};