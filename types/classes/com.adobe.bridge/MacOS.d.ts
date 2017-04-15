/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class MacOS extends Adobe.Csawlib.CSHostObject {
			/**
			 * This is not a Method Description.
			 * @param {string} signature - 
			 */
			public appBySignature(signature: string): void;
			/** This is not a Method Description. */
			public desktop(): void;
			/** This is not a Method Description. */
			public finder(): void;
		}
	}
}