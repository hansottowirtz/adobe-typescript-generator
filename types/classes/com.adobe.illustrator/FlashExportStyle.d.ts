/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FlashExportStyle extends IllustratorEnumBase {
			/** Illustrator Artboards to Flash Files. */
			public static readonly ARTBOARDSTOFILES: FlashExportStyle;
			/** Illustrator file to Flash file. */
			public static readonly ASFLASHFILE: FlashExportStyle;
			public static readonly enumCache: CSEnumSharedCache;
			/** Illustrator layers to Flash files. */
			public static readonly LAYERSASFILES: FlashExportStyle;
			/** Illustrator layers to Flash frames. */
			public static readonly LAYERSASFRAMES: FlashExportStyle;
			/** Illustrator layers to Flash Symbols. */
			public static readonly LAYERSASSYMBOLS: FlashExportStyle;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}