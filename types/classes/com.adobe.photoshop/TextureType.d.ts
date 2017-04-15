/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextureType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The image appears as if viewed through glass blocks. */
			public static readonly BLOCKS: Adobe.Photoshop.TextureType;
			/** The image appears as if painted on canvas. */
			public static readonly CANVAS: Adobe.Photoshop.TextureType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Texture from an existing document. */
			public static readonly FILE: Adobe.Photoshop.TextureType;
			/** The image appears as if frosted. */
			public static readonly FROSTED: Adobe.Photoshop.TextureType;
			/**
			 * The image appears as if viewed through an array of tiny 
			 * lenses.
			 */
			public static readonly TINYLENS: Adobe.Photoshop.TextureType;
			/** Constructor */
			public constructor();
		}
	}
}