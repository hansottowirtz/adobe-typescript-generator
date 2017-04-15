/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RecordsPerPage extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Places as many records as fit on a page. */
			public static readonly MULTIPLE_RECORD: Adobe.Indesign.RecordsPerPage;
			/**
			 * Alias for MULTIPLE_RECORD. Places as many records as fit on 
			 * a page.
			 */
			public static readonly multipleRecord: Adobe.Indesign.RecordsPerPage;
			/** Places each record on a new page. */
			public static readonly SINGLE_RECORD: Adobe.Indesign.RecordsPerPage;
			/** Alias for SINGLE_RECORD. Places each record on a new page. */
			public static readonly singleRecord: Adobe.Indesign.RecordsPerPage;
			/** Constructor */
			public constructor();
		}
	}
}