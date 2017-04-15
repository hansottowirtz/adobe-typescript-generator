/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The editorial urgency status of the artwork. */
		class Urgency extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Level 4 (fourth highest) */
			public static readonly FOUR: Adobe.Photoshop.Urgency;
			/** Highest level of urgency. */
			public static readonly HIGH: Adobe.Photoshop.Urgency;
			/** Low. */
			public static readonly LOW: Adobe.Photoshop.Urgency;
			/** No urgency. */
			public static readonly NONE: Adobe.Photoshop.Urgency;
			/** Medium urgency. */
			public static readonly NORMAL: Adobe.Photoshop.Urgency;
			/** Level 7 (second lowest) */
			public static readonly SEVEN: Adobe.Photoshop.Urgency;
			/** Level 6 (third lowest) */
			public static readonly SIX: Adobe.Photoshop.Urgency;
			/** Level 3 (third highest) */
			public static readonly THREE: Adobe.Photoshop.Urgency;
			/** Level 2 (second highest) */
			public static readonly TWO: Adobe.Photoshop.Urgency;
			/** Constructor */
			public constructor();
		}
	}
}