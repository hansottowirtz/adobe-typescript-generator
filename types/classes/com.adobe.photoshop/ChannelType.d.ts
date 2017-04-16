/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ChannelType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly COMPONENT: Adobe.Photoshop.ChannelType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly MASKEDAREA: Adobe.Photoshop.ChannelType;
			public static readonly SELECTEDAREA: Adobe.Photoshop.ChannelType;
			public static readonly SPOTCOLOR: Adobe.Photoshop.ChannelType;
			/** Constructor */
			public constructor();
		}
	}
}