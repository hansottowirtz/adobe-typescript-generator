/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class MacOS extends Adobe.Csawlib.CSHostObject {
			/**
			 * @param {string} signature
			 * @returns {void}
			 */
			public appBySignature(signature: string): void;
			/**
			 * @returns {void}
			 */
			public desktop(): void;
			/**
			 * @returns {void}
			 */
			public finder(): void;
		}
	}
}