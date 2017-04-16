/// <reference path="../../packages/com.adobe.csawlib/references.d.ts"/>

declare namespace Adobe {
	namespace Csawlib {
		/** Base for all enum-representing classes */
		class CSEnumBase extends Adobe.Csawlib.CSHostObject {
			/**
			 * Returns the numerical value
			 * @type {any}
			 * @readonly
			 */
			public readonly value: any;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}