/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectTypes extends Adobe.Csawlib.CSEnumBase {
			/** All frame types. */
			public static readonly ALL_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/** Alias for ALL_FRAMES_TYPE. All frame types. */
			public static readonly allFramesType: Adobe.Indesign.ObjectTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Graphics frame. */
			public static readonly GRAPHIC_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/** Alias for GRAPHIC_FRAMES_TYPE. Graphics frame. */
			public static readonly graphicFramesType: Adobe.Indesign.ObjectTypes;
			/** Text frame. */
			public static readonly TEXT_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/** Alias for TEXT_FRAMES_TYPE. Text frame. */
			public static readonly textFramesType: Adobe.Indesign.ObjectTypes;
			/** Unassigned frame. */
			public static readonly UNASSIGNED_FRAMES_TYPE: Adobe.Indesign.ObjectTypes;
			/** Alias for UNASSIGNED_FRAMES_TYPE. Unassigned frame. */
			public static readonly unassignedFramesType: Adobe.Indesign.ObjectTypes;
			/** Constructor */
			public constructor();
		}
	}
}