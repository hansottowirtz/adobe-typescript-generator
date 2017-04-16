/// <reference path="../../packages/com.adobe.bridge/index.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class globals extends Adobe.Csawlib.CSHostObject {
			/** The application object. */
			public app: Adobe.Bridge.App;
			/**
			 * Displays a platform-standard dialog containing a short 
			 * message and an OK button.
			 * @param {string} message 
			 */
			public alert(message: string): void;
			/**
			 * Displays a platform-standard dialog containing a short 
			 * message and two buttons labeled Yes and No.
			 * @param {string} message 
			 */
			public confirm(message: string): boolean;
			/**
			 * Displays a modal dialog that returns the user’s text input.
			 * @param {string} message 
			 */
			public prompt(message: string): string;
		}
	}
}