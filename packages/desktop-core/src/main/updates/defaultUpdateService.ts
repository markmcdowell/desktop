import { IConfiguration, IUpdatePolicySpecification } from "@reactivemarkets/desktop-types";
import { autoUpdater } from "electron-updater";
import { logger } from "../logging";
import { IUpdateService } from "./iUpdateService";

export class DefaultUpdateService implements IUpdateService {
    public configure(configuration: IConfiguration): Promise<IConfiguration> {
        const spec = configuration.spec as IUpdatePolicySpecification | undefined;
        if (spec?.disableUpdates) {
            return Promise.resolve(configuration);
        }

        autoUpdater.on("checking-for-update", () => {
            logger.info("Checking for update...");
        });

        autoUpdater.on("update-available", () => {
            logger.info("Update available.");
        });

        autoUpdater.on("update-not-available", () => {
            logger.info("Update not available.");
        });

        autoUpdater.on("error", (error) => {
            logger.info(`Error in auto-updater. ${error}`);
        });

        autoUpdater.on("download-progress", (progress) => {
            const { bytesPerSecond, percent, total, transferred } = progress;

            logger.info(`Download speed: ${bytesPerSecond} Downloaded ${percent} (${transferred}/${total})`);
        });

        autoUpdater.on("update-downloaded", () => {
            logger.info("Update downloaded");
        });

        if (spec?.channel !== undefined) {
            autoUpdater.channel = spec.channel;
        }
        autoUpdater.allowDowngrade = spec?.allowDowngrade ?? true;
        autoUpdater.allowPrerelease = spec?.allowPrerelease ?? false;
        autoUpdater.checkForUpdatesAndNotify();

        return Promise.resolve(configuration);
    }
}