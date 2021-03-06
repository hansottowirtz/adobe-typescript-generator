/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MoviePosterTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses an image from the movie file.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly FROM_MOVIE: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Alias for FROM_MOVIE. Uses an image from the movie file.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly fromMovie: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Alias for NONE. None.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.MoviePosterTypes;
			/**
			 * None.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.MoviePosterTypes;
			/**
			 * (Read-only) Indicates whether the movie poster is not the 
			 * standard, generic image.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly PROXY_IMAGE: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Alias for PROXY_IMAGE. (Read-only) Indicates whether the 
			 * movie poster is not the standard, generic image.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly proxyImage: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Alias for STANDARD. Uses the generic movie poster image 
			 * file.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly standard: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Uses the generic movie poster image file.
			 * @type {Adobe.Incopy.MoviePosterTypes}
			 * @readonly
			 */
			public static readonly STANDARD: Adobe.Incopy.MoviePosterTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}