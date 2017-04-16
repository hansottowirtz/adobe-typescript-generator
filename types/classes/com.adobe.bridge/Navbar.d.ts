/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class Navbar extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {string}
			 */
			public file: string;
			/**
			 * @type {number}
			 */
			public height: number;
			/**
			 * @type {string}
			 */
			public id: string;
			/**
			 * @type {string}
			 */
			public jsFuncs: string;
			/**
			 * @type {string}
			 */
			public type: string;
			/**
			 * @type {boolean}
			 */
			public visible: boolean;
			/**
			 * @returns {void}
			 */
			public execJS(): void;
			/**
			 * @returns {void}
			 */
			public print(): void;
		}
	}
}