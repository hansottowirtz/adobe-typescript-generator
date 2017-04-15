/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OTFFigureStyle extends Adobe.Csawlib.CSEnumBase {
			/** Use the default figure style for the font. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for DEFAULT_VALUE. Use the default figure style for 
			 * the font.
			 */
			public static readonly defaultValue: Adobe.Indesign.OTFFigureStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use proportional width lining figures. */
			public static readonly PROPORTIONAL_LINING: Adobe.Indesign.OTFFigureStyle;
			/** Use proportional width oldstyle figures. */
			public static readonly PROPORTIONAL_OLDSTYLE: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for PROPORTIONAL_LINING. Use proportional width lining 
			 * figures.
			 */
			public static readonly proportionalLining: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for PROPORTIONAL_OLDSTYLE. Use proportional width 
			 * oldstyle figures.
			 */
			public static readonly proportionalOldstyle: Adobe.Indesign.OTFFigureStyle;
			/** Use monspaced lining figures. */
			public static readonly TABULAR_LINING: Adobe.Indesign.OTFFigureStyle;
			/** Use monospaced oldstyle figures. */
			public static readonly TABULAR_OLDSTYLE: Adobe.Indesign.OTFFigureStyle;
			/** Alias for TABULAR_LINING. Use monspaced lining figures. */
			public static readonly tabularLining: Adobe.Indesign.OTFFigureStyle;
			/**
			 * Alias for TABULAR_OLDSTYLE. Use monospaced oldstyle figures.
			 */
			public static readonly tabularOldstyle: Adobe.Indesign.OTFFigureStyle;
			/** Constructor */
			public constructor();
		}
	}
}