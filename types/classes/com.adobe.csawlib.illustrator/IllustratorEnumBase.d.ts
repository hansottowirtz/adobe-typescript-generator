/// <reference path="../../packages/com.adobe.csawlib.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIllustrator {
		/** Base for all enum-representing classes */
		class IllustratorEnumBase extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Returns the numerical value
			 * @type {any}
			 * @readonly
			 */
			public readonly value: any;
			/**
			 * @returns {void}
			 */
			public constructor();
		}
	}
}