import { WellKnownConfigurationKind, WellKnownNamespace } from "@reactivemarkets/desktop-types";
import { ApplicationConfigurationGenerator } from "../applicationConfigurationGenerator";

describe("canGenerate", () => {
    describe("can generate for", () => {
        test("application", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.Application)).toBe(true);
        });
    });

    describe("can't generator for", () => {
        test("external", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.External)).toBe(false);
        });

        test("service", () => {
            const generator = new ApplicationConfigurationGenerator();

            expect(generator.canGenerate(WellKnownConfigurationKind.Service)).toBe(false);
        });
    });
});

describe("generate", () => {
    test("should generate application config", async () => {
        const generator = new ApplicationConfigurationGenerator();

        const configuration = await generator.generate({
            kind: WellKnownConfigurationKind.Application,
            name: "test",
            url: "http://url",
        });

        expect(configuration.kind).toBe(WellKnownConfigurationKind.Application);
    });

    test("should set namespace to default", async () => {
        const generator = new ApplicationConfigurationGenerator();

        const configuration = await generator.generate({
            kind: WellKnownConfigurationKind.Application,
            name: "test",
            url: "http://url",
        });

        expect(configuration.metadata.namespace).toBe(WellKnownNamespace.default);
    });
});
