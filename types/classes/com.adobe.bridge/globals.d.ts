/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class globals extends Adobe.Csawlib.CSHostObject {
			/**
			 * The application object.
			 * @type {Adobe.Bridge.App}
			 */
			public app: Adobe.Bridge.App;
			/**
			 * Displays a platform-standard dialog containing a short 
			 * message and an OK button.
			 * @param {string} message 
			 * @returns {void}
			 */
			public alert(message: string): void;
			/**
			 * Displays a platform-standard dialog containing a short 
			 * message and two buttons labeled Yes and No.
			 * @param {string} message 
			 * @returns {boolean}
			 */
			public confirm(message: string): boolean;
			/**
			 * Displays a modal dialog that returns the user’s text input.
			 * @param {string} message 
			 * @returns {string}
			 */
			public prompt(message: string): string;
		}
	}
}