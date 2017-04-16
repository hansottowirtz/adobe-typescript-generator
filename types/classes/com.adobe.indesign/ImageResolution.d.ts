/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImageResolution extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** 150 pixels per inch */
			public static readonly PPI_150: Adobe.Indesign.ImageResolution;
			/** 300 pixels per inch */
			public static readonly PPI_300: Adobe.Indesign.ImageResolution;
			/** 72 pixels per inch */
			public static readonly PPI_72: Adobe.Indesign.ImageResolution;
			/** 96 pixels per inch */
			public static readonly PPI_96: Adobe.Indesign.ImageResolution;
			/** Alias for PPI_150. 150 pixels per inch */
			public static readonly ppi150: Adobe.Indesign.ImageResolution;
			/** Alias for PPI_300. 300 pixels per inch */
			public static readonly ppi300: Adobe.Indesign.ImageResolution;
			/** Alias for PPI_72. 72 pixels per inch */
			public static readonly ppi72: Adobe.Indesign.ImageResolution;
			/** Alias for PPI_96. 96 pixels per inch */
			public static readonly ppi96: Adobe.Indesign.ImageResolution;
			/** Constructor */
			public constructor();
		}
	}
}