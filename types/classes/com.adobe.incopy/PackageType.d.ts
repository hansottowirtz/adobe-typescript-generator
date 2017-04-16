/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PackageType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Creates an assignment package for export.
			 * @type {Adobe.Incopy.PackageType}
			 * @readonly
			 */
			public static readonly FORWARD_PACKAGE: Adobe.Incopy.PackageType;
			/**
			 * Alias for FORWARD_PACKAGE. Creates an assignment package for 
			 * export.
			 * @type {Adobe.Incopy.PackageType}
			 * @readonly
			 */
			public static readonly forwardPackage: Adobe.Incopy.PackageType;
			/**
			 * Creates an assignment package to place in the main document.
			 * @type {Adobe.Incopy.PackageType}
			 * @readonly
			 */
			public static readonly RETURN_PACKAGE: Adobe.Incopy.PackageType;
			/**
			 * Alias for RETURN_PACKAGE. Creates an assignment package to 
			 * place in the main document.
			 * @type {Adobe.Incopy.PackageType}
			 * @readonly
			 */
			public static readonly returnPackage: Adobe.Incopy.PackageType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}