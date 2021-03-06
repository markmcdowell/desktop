import { IConfiguration, WellKnownConfigurationKind, WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { ILogger } from "../logging";
import { ILauncherService } from "./iLauncherService";
import { IUpdateService } from "../updates";

export class UpdatePolicyLauncherService implements ILauncherService {
    private readonly logger: ILogger;
    private readonly updateService: IUpdateService;

    public constructor(logger: ILogger, updateService: IUpdateService) {
        this.logger = logger;
        this.updateService = updateService;
    }

    public canLaunch({ kind }: IConfiguration) {
        return kind === WellKnownConfigurationKind.UpdatePolicy;
    }

    public launch(configuration: IConfiguration) {
        const { name, namespace = WellKnownNamespace.default } = configuration.metadata;

        this.logger.verbose(`Configuring updates: ${name} in ${namespace}`);

        return this.updateService.create(configuration);
    }
}
