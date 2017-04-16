/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PostScriptImageCompressionType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly IMAGECOMPRESSIONNONE: Adobe.Illustrator.PostScriptImageCompressionType;
			public static readonly JPEG: Adobe.Illustrator.PostScriptImageCompressionType;
			public static readonly RLE: Adobe.Illustrator.PostScriptImageCompressionType;
			/** Constructor */
			public constructor();
		}
	}
}