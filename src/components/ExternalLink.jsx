import { Link as MuiLink } from "@mui/material";

/**
 * Reusable link component with consistent hover styling.
 * Use for external links, mailto, or in-page anchors.
 *
 * @param {string} href - Link URL
 * @param {boolean} external - If true, opens in new tab with rel="noreferrer"
 * @param {React.ReactNode} children - Link content
 * @param {object} sx - Additional MUI sx styles (merged with default hover styles)
 */
const ExternalLink = ({
    href,
    external = true,
    children,
    sx = {},
    ...rest
}) => {
    const baseSx = {
        color: "inherit",
        textDecoration: "none",
        fontWeight: 500,
        transition: "color 0.2s ease, text-decoration-color 0.2s ease",
        "&:hover": {
            color: "primary.main",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
        },
    };

    return (
        <MuiLink
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
            sx={{ ...baseSx, ...sx }}
            {...rest}
        >
            {children}
        </MuiLink>
    );
};

export default ExternalLink;
