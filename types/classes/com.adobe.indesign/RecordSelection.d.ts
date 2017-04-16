/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RecordSelection extends Adobe.Csawlib.CSEnumBase {
			/** Merges all records. */
			public static readonly ALL_RECORDS: Adobe.Indesign.RecordSelection;
			/** Alias for ALL_RECORDS. Merges all records. */
			public static readonly allRecords: Adobe.Indesign.RecordSelection;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Merges the specified record. */
			public static readonly ONE_RECORD: Adobe.Indesign.RecordSelection;
			/** Alias for ONE_RECORD. Merges the specified record. */
			public static readonly oneRecord: Adobe.Indesign.RecordSelection;
			/** Alias for RANGE. Merges all records in the specified range. */
			public static readonly range: Adobe.Indesign.RecordSelection;
			/** Merges all records in the specified range. */
			public static readonly RANGE: Adobe.Indesign.RecordSelection;
			/** Constructor */
			public constructor();
		}
	}
}