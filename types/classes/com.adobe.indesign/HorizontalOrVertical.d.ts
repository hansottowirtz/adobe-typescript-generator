/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HorizontalOrVertical extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for HORIZONTAL. Horizontal orientation.
			 * @type {Adobe.Indesign.HorizontalOrVertical}
			 * @readonly
			 */
			public static readonly horizontal: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * Horizontal orientation.
			 * @type {Adobe.Indesign.HorizontalOrVertical}
			 * @readonly
			 */
			public static readonly HORIZONTAL: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * Alias for VERTICAL. Vertical orientation.
			 * @type {Adobe.Indesign.HorizontalOrVertical}
			 * @readonly
			 */
			public static readonly vertical: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * Vertical orientation.
			 * @type {Adobe.Indesign.HorizontalOrVertical}
			 * @readonly
			 */
			public static readonly VERTICAL: Adobe.Indesign.HorizontalOrVertical;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}