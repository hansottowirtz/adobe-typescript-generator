/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The PostScript image compression type. */
		class PostScriptImageCompressionType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No image compression. */
			public static readonly IMAGECOMPRESSIONNONE: Adobe.Illustrator.PostScriptImageCompressionType;
			/** JPEG image compression. */
			public static readonly JPEG: Adobe.Illustrator.PostScriptImageCompressionType;
			/** RLE image compression. */
			public static readonly RLE: Adobe.Illustrator.PostScriptImageCompressionType;
			/** Constructor */
			public constructor();
		}
	}
}