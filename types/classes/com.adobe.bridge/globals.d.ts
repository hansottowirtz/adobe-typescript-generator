/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class globals extends Adobe.Csawlib.CSHostObject {
			/** This is not a Property Description. */
			public app: Adobe.Bridge.App;
			/**
			 * This is not a Method Description.
			 * @param {string} message - 
			 */
			public alert(message: string): void;
			/**
			 * This is not a Method Description.
			 * @param {string} message - 
			 */
			public confirm(message: string): boolean;
			/**
			 * This is not a Method Description.
			 * @param {string} message - 
			 */
			public prompt(message: string): string;
		}
	}
}