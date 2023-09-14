import { serialize } from 'cookie';

export default (req, res) => {
  const visitCount = parseInt(req.cookies.visitCount || '0');
  if (visitCount < 5) {
    const newVisitCount = visitCount + 1;
    res.setHeader('Set-Cookie', serialize('visitCount', newVisitCount.toString(), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
    }));
    res.status(200).json({ visitCount: newVisitCount });
  } else {
    res.status(200).json({ visitCount });
  }
};
