interface Props {
  prefixTitle?: string;
}

export const header = ({ prefixTitle }: Props) => `
<tr>
    <td align="center" style="padding: 24px; font-size: 24px; background: #242424; color: #FFFFFF">
        <p style="margin: 0px;">${prefixTitle ?? ''} <b>Easy Apply</b></p>
    </td>
</tr>
`;
