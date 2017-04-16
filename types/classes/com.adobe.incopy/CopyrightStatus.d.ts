/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CopyrightStatus extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NO. The document is in the public domain. */
			public static readonly no: Adobe.Incopy.CopyrightStatus;
			/** The document is in the public domain. */
			public static readonly NO: Adobe.Incopy.CopyrightStatus;
			/** Alias for UNKNOWN. The copyright status is unknown. */
			public static readonly unknown: Adobe.Incopy.CopyrightStatus;
			/** The copyright status is unknown. */
			public static readonly UNKNOWN: Adobe.Incopy.CopyrightStatus;
			/** Alias for YES. The document is copyrighted. */
			public static readonly yes: Adobe.Incopy.CopyrightStatus;
			/** The document is copyrighted. */
			public static readonly YES: Adobe.Incopy.CopyrightStatus;
			/** Constructor */
			public constructor();
		}
	}
}