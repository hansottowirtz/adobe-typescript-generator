/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AutoSizingTypeEnum extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Text frame will be resized in both(height and width) 
			 * dimensions.
			 */
			public static readonly HEIGHT_AND_WIDTH: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Text frame will be resized in both(height and width) 
			 * dimensions proportionally.
			 */
			public static readonly HEIGHT_AND_WIDTH_PROPORTIONALLY: Adobe.Incopy.AutoSizingTypeEnum;
			/** Text frame will be resized in height dimension only. */
			public static readonly HEIGHT_ONLY: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_AND_WIDTH. Text frame will be resized in 
			 * both(height and width) dimensions.
			 */
			public static readonly heightAndWidth: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_AND_WIDTH_PROPORTIONALLY. Text frame will 
			 * be resized in both(height and width) dimensions 
			 * proportionally.
			 */
			public static readonly heightAndWidthProportionally: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for HEIGHT_ONLY. Text frame will be resized in height 
			 * dimension only.
			 */
			public static readonly heightOnly: Adobe.Incopy.AutoSizingTypeEnum;
			/** Alias for OFF. Text frame auto-sizing is off. */
			public static readonly off: Adobe.Incopy.AutoSizingTypeEnum;
			/** Text frame auto-sizing is off. */
			public static readonly OFF: Adobe.Incopy.AutoSizingTypeEnum;
			/** Text frame will be resized in width dimension only. */
			public static readonly WIDTH_ONLY: Adobe.Incopy.AutoSizingTypeEnum;
			/**
			 * Alias for WIDTH_ONLY. Text frame will be resized in width 
			 * dimension only.
			 */
			public static readonly widthOnly: Adobe.Incopy.AutoSizingTypeEnum;
			/** Constructor */
			public constructor();
		}
	}
}