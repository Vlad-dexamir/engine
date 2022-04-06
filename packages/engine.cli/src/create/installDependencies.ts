import { spawn } from "child_process";
import { performance } from "perf_hooks";

type props = {
  _spawn: typeof spawn;
  _now: () => number;
  isReady: State["create"]["flags"]["isPackageJsonReady"];
  getTargetPath: Get<State["create"]["config"]["targetPath"]>;
  flag: Update<State["create"]["flags"]["isDependencyInstallReady"]>;
};

export const installDependencies: producer = async ({
  _now,
  _spawn = spawn,
  isReady = observe.create.flags.isPackageJsonReady,
  getTargetPath = get.create.config.targetPath,
  flag = update.create.flags.isDependencyInstallReady,
}: props) => {
  if (!isReady) {
    return;
  }

  const targetPath = getTargetPath.value();
  if (!targetPath) {
    throw new Error("Missing values");
  }

  const install = _spawn("npm", ["install"], {
    cwd: targetPath,
  });

  install.stdout.on("data", (data) => {
    // console.log(`stdout: ${data}`);
  });

  const stderr: any[] = [];

  install.stderr.on("data", (chunk) => {
    stderr.push(chunk);
  });

  install.on("close", (code) => {
    if (code !== 0) {
      console.error(
        `Encountered an error code ${code} while installing dependencies`
      );
      throw new Error(Buffer.concat(stderr).toString());
    }
    flag.set(_now());
  });
};
