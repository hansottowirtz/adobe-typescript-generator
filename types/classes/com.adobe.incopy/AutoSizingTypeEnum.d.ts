/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AutoSizingTypeEnum extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Text frame will be resized in both(height and width) 
			 * dimensions.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly HEIGHT_AND_WIDTH: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Text frame will be resized in both(height and width) 
			 * dimensions proportionally.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly HEIGHT_AND_WIDTH_PROPORTIONALLY: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Text frame will be resized in height dimension only.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly HEIGHT_ONLY: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_AND_WIDTH. Text frame will be resized in 
			 * both(height and width) dimensions.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly heightAndWidth: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_AND_WIDTH_PROPORTIONALLY. Text frame will 
			 * be resized in both(height and width) dimensions 
			 * proportionally.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly heightAndWidthProportionally: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_ONLY. Text frame will be resized in height 
			 * dimension only.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly heightOnly: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for OFF. Text frame auto-sizing is off.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly off: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Text frame auto-sizing is off.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly OFF: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Text frame will be resized in width dimension only.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly WIDTH_ONLY: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for WIDTH_ONLY. Text frame will be resized in width 
			 * dimension only.
			 * @type {Adobe.Incopy.AutoSizingTypeEnum}
			 * @readonly
			 */
			public static readonly widthOnly: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}