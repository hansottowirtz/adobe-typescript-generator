/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Leading extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for AUTO. Apply auto leading.
			 * @type {Adobe.Indesign.Leading}
			 * @readonly
			 */
			public static readonly auto: Adobe.Indesign.Leading;
			/**
			 * Apply auto leading.
			 * @type {Adobe.Indesign.Leading}
			 * @readonly
			 */
			public static readonly AUTO: Adobe.Indesign.Leading;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}