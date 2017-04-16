/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class MacOS extends Adobe.Csawlib.CSHostObject {
			/**
			 * @param {string} signature
			 */
			public appBySignature(signature: string): void;
			public desktop(): void;
			public finder(): void;
		}
	}
}