/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PostScriptImageCompressionType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** No image compression. */
			public static readonly IMAGECOMPRESSIONNONE: PostScriptImageCompressionType;
			/** JPEG image compression. */
			public static readonly JPEG: PostScriptImageCompressionType;
			/** RLE image compression. */
			public static readonly RLE: PostScriptImageCompressionType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}