/// <reference path="../../packages/com.adobe.bridge/references.d.ts"/>

declare namespace Adobe {
	namespace Bridge {
		class QuickSearchItem extends Adobe.Csawlib.CSHostObject {
			/**
			 * @type {string}
			 */
			public displayName: string;
			/**
			 * @type {string}
			 */
			public valueName: string;
			/**
			 * @returns {void}
			 */
			public constructor();
			/**
			 * @param {any[]} args
			 * @returns {void}
			 */
			protected createWithArgs(args: any[]): void;
		}
	}
}