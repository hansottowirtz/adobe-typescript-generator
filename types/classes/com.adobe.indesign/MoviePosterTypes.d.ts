/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MoviePosterTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses an image from the movie file.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly FROM_MOVIE: Adobe.Indesign.MoviePosterTypes;
			/**
			 * Alias for FROM_MOVIE. Uses an image from the movie file.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly fromMovie: Adobe.Indesign.MoviePosterTypes;
			/**
			 * Alias for NONE. None.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.MoviePosterTypes;
			/**
			 * None.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.MoviePosterTypes;
			/**
			 * (Read-only) Indicates whether the movie poster is not the 
			 * standard, generic image.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly PROXY_IMAGE: Adobe.Indesign.MoviePosterTypes;
			/**
			 * Alias for PROXY_IMAGE. (Read-only) Indicates whether the 
			 * movie poster is not the standard, generic image.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly proxyImage: Adobe.Indesign.MoviePosterTypes;
			/**
			 * Alias for STANDARD. Uses the generic movie poster image 
			 * file.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly standard: Adobe.Indesign.MoviePosterTypes;
			/**
			 * Uses the generic movie poster image file.
			 * @type {Adobe.Indesign.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly STANDARD: Adobe.Indesign.MoviePosterTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}