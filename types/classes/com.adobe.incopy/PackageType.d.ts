/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PackageType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Creates an assignment package for export. */
			public static readonly FORWARD_PACKAGE: Adobe.Incopy.PackageType;
			/**
			 * Alias for FORWARD_PACKAGE. Creates an assignment package for 
			 * export.
			 */
			public static readonly forwardPackage: Adobe.Incopy.PackageType;
			/**
			 * Creates an assignment package to place in the main document.
			 */
			public static readonly RETURN_PACKAGE: Adobe.Incopy.PackageType;
			/**
			 * Alias for RETURN_PACKAGE. Creates an assignment package to 
			 * place in the main document.
			 */
			public static readonly returnPackage: Adobe.Incopy.PackageType;
			/** Constructor */
			public constructor();
		}
	}
}