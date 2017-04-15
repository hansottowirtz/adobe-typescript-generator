/// <reference path="../../namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Metadata extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public namespace: string;
			/** This is not a Method Description. */
			public constructor();
			/** This is not a Method Description. */
			public applyMetadataTemplate(): void;
			/**
			 * @param {any[]} args
			 */
			protected createWithArgs(args: any[]): void;
			/**
			 * This is not a Method Description.
			 * @param {string} namespace - 
			 * @param {string} uri - 
			 */
			public read(namespace: string, uri: string): string;
			/** This is not a Method Description. */
			public serialize(): string;
		}
	}
}