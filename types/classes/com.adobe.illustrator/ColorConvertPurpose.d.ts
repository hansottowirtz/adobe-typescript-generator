/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Denotes the purpose of color conversion using 
		 * ConvertSmapleColor method.
		 */
		class ColorConvertPurpose extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Do standard conversion, without black preservation. */
			public static readonly defaultpurpose: Adobe.Illustrator.ColorConvertPurpose;
			/** Dummy option. */
			public static readonly dummypurpose: Adobe.Illustrator.ColorConvertPurpose;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Conversion options appropriate to creating an image for 
			 * print or export.
			 */
			public static readonly exportpurpose: Adobe.Illustrator.ColorConvertPurpose;
			/**
			 * Conversion options appropriate to creating an image for 
			 * screen display.
			 */
			public static readonly previewpurpose: Adobe.Illustrator.ColorConvertPurpose;
			/** Constructor */
			public constructor();
		}
	}
}