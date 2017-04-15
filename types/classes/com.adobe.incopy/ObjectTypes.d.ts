/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ObjectTypes extends Adobe.Csawlib.CSEnumBase {
			/** All frame types. */
			public static readonly ALL_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/** Alias for ALL_FRAMES_TYPE. All frame types. */
			public static readonly allFramesType: Adobe.Incopy.ObjectTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Graphics frame. */
			public static readonly GRAPHIC_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/** Alias for GRAPHIC_FRAMES_TYPE. Graphics frame. */
			public static readonly graphicFramesType: Adobe.Incopy.ObjectTypes;
			/** Text frame. */
			public static readonly TEXT_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/** Alias for TEXT_FRAMES_TYPE. Text frame. */
			public static readonly textFramesType: Adobe.Incopy.ObjectTypes;
			/** Unassigned frame. */
			public static readonly UNASSIGNED_FRAMES_TYPE: Adobe.Incopy.ObjectTypes;
			/** Alias for UNASSIGNED_FRAMES_TYPE. Unassigned frame. */
			public static readonly unassignedFramesType: Adobe.Incopy.ObjectTypes;
			/** Constructor */
			public constructor();
		}
	}
}