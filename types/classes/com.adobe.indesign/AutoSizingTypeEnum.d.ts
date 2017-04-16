/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AutoSizingTypeEnum extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Text frame will be resized in both(height and width) 
			 * dimensions.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly HEIGHT_AND_WIDTH: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Text frame will be resized in both(height and width) 
			 * dimensions proportionally.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly HEIGHT_AND_WIDTH_PROPORTIONALLY: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Text frame will be resized in height dimension only.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly HEIGHT_ONLY: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_AND_WIDTH. Text frame will be resized in 
			 * both(height and width) dimensions.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly heightAndWidth: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_AND_WIDTH_PROPORTIONALLY. Text frame will 
			 * be resized in both(height and width) dimensions 
			 * proportionally.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly heightAndWidthProportionally: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_ONLY. Text frame will be resized in height 
			 * dimension only.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly heightOnly: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Alias for OFF. Text frame auto-sizing is off.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly off: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Text frame auto-sizing is off.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly OFF: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Text frame will be resized in width dimension only.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly WIDTH_ONLY: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Alias for WIDTH_ONLY. Text frame will be resized in width 
			 * dimension only.
			 * @type {Adobe.Indesign.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly widthOnly: Adobe.Indesign.AutoSizingTypeEnum;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}