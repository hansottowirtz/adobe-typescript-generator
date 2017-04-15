/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class BitsPerChannelType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** 8 bits per channel. */
			public static readonly EIGHT: Adobe.Photoshop.BitsPerChannelType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 1 bit per channel. */
			public static readonly ONE: Adobe.Photoshop.BitsPerChannelType;
			/** 16 bits per channel. */
			public static readonly SIXTEEN: Adobe.Photoshop.BitsPerChannelType;
			/** 32 bits per channel. */
			public static readonly THIRTYTWO: Adobe.Photoshop.BitsPerChannelType;
			/** Constructor */
			public constructor();
		}
	}
}