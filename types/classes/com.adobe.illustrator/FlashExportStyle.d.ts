/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FlashExportStyle extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Illustrator Artboards to Flash Files. */
			public static readonly ARTBOARDSTOFILES: Adobe.Illustrator.FlashExportStyle;
			/** Illustrator file to Flash file. */
			public static readonly ASFLASHFILE: Adobe.Illustrator.FlashExportStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Illustrator layers to Flash files. */
			public static readonly LAYERSASFILES: Adobe.Illustrator.FlashExportStyle;
			/** Illustrator layers to Flash frames. */
			public static readonly LAYERSASFRAMES: Adobe.Illustrator.FlashExportStyle;
			/** Illustrator layers to Flash Symbols. */
			public static readonly LAYERSASSYMBOLS: Adobe.Illustrator.FlashExportStyle;
			/** Constructor */
			public constructor();
		}
	}
}