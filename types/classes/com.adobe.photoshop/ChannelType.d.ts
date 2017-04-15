/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The type of channel. */
		class ChannelType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The channel related to the document color model. */
			public static readonly COMPONENT: Adobe.Photoshop.ChannelType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The apha channel where color indicates a masked area. */
			public static readonly MASKEDAREA: Adobe.Photoshop.ChannelType;
			/** The lpha channel where color indicates a selected area. */
			public static readonly SELECTEDAREA: Adobe.Photoshop.ChannelType;
			/** The alpha channel to store a spot color. */
			public static readonly SPOTCOLOR: Adobe.Photoshop.ChannelType;
			/** Constructor */
			public constructor();
		}
	}
}