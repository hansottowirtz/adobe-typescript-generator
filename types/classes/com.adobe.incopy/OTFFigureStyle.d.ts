/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class OTFFigureStyle extends Adobe.Csawlib.CSEnumBase {
			/** Use the default figure style for the font. */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.OTFFigureStyle;
			/**
			 * Alias for DEFAULT_VALUE. Use the default figure style for 
			 * the font.
			 */
			public static readonly defaultValue: Adobe.Incopy.OTFFigureStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use proportional width lining figures. */
			public static readonly PROPORTIONAL_LINING: Adobe.Incopy.OTFFigureStyle;
			/** Use proportional width oldstyle figures. */
			public static readonly PROPORTIONAL_OLDSTYLE: Adobe.Incopy.OTFFigureStyle;
			/**
			 * Alias for PROPORTIONAL_LINING. Use proportional width lining 
			 * figures.
			 */
			public static readonly proportionalLining: Adobe.Incopy.OTFFigureStyle;
			/**
			 * Alias for PROPORTIONAL_OLDSTYLE. Use proportional width 
			 * oldstyle figures.
			 */
			public static readonly proportionalOldstyle: Adobe.Incopy.OTFFigureStyle;
			/** Use monspaced lining figures. */
			public static readonly TABULAR_LINING: Adobe.Incopy.OTFFigureStyle;
			/** Use monospaced oldstyle figures. */
			public static readonly TABULAR_OLDSTYLE: Adobe.Incopy.OTFFigureStyle;
			/** Alias for TABULAR_LINING. Use monspaced lining figures. */
			public static readonly tabularLining: Adobe.Incopy.OTFFigureStyle;
			/**
			 * Alias for TABULAR_OLDSTYLE. Use monospaced oldstyle figures.
			 */
			public static readonly tabularOldstyle: Adobe.Incopy.OTFFigureStyle;
			/** Constructor */
			public constructor();
		}
	}
}